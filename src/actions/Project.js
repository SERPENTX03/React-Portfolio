"use server";

import prisma from "@/lib/db";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const createProject = async (formData) => {
  const rowData = Object.fromEntries(formData);

  const { project, description, githubUrl, siteUrl } = rowData;
  const file = formData.get("image");

  try {
    // อัปโหลดไฟล์ไปยัง Supabase Storage
    const fileName = `${Date.now()}_${file.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("project") // ชื่อ bucket
      .upload(fileName, file);

    if (uploadError) {
      console.error("File upload failed:", uploadError);
      throw new Error("File upload failed");
    }

    // สร้าง URL สำหรับแสดงรูปภาพ
    const imageUrl = supabase.storage.from("project").getPublicUrl(fileName)
      .data?.publicUrl;

    // บันทึกข้อมูลลงฐานข้อมูลด้วย Prisma
    const createdProject = await prisma.project.create({
      data: {
        title: project,
        description: description,
        githubUrl: githubUrl,
        siteUrl: siteUrl,
        imageUrl: imageUrl ?? "",
      },
    });

    return { success: true, project: createdProject };
  } catch (error) {
    console.error("Failed Create Project!", error);
    return { error: "Failed Create Project", success: false };
  }
};

export const fetchAllProject = async () => {
  const allProject = await prisma.project.findMany({});
  return allProject;
};
