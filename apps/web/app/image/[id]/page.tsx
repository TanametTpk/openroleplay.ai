import { Metadata, ResolvingMetadata } from "next";
import { constructMetadata } from "../../lib/utils";
import ChatWithCharacter from "../../character/[id]/ChatWithCharacter";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const image = await fetch(
    `${process.env.NEXT_PUBLIC_CONVEX_URL?.replace(
      "convex.cloud",
      "convex.site",
    )}/image?imageId=${id}`,
  ).then((res) => res.json());

  return constructMetadata({
    title: image.name,
    description: image.description,
    image: image.imageUrl ? image.imageUrl : undefined,
    icon: image.imageUrl ? image.imageUrl : undefined,
  });
}

export default function Page({ params }: { params: { id: string } }) {
  return <ChatWithCharacter params={params} />;
}
