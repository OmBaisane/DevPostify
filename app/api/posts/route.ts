export async function GET() {
  return Response.json({ message: "API working" });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  console.log("Deleted on server : ", id);

  return Response.json({ success: true });
}
