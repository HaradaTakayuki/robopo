import { db } from "@/app/lib/db/db"
import { course, type SelectCourse } from "@/app/lib/db/schema"

export const revalidate = 0

export async function GET() {
  const getCourses: SelectCourse[] = await db.select().from(course)
  return Response.json({ getCourses })
}
