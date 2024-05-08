import type { Content as GalactiksContent } from "@galactiks/explorer";

type ContentProps = {
  content: GalactiksContent;
};

export function BodyContent({ content }: ContentProps) {
  if (!content.body) {
    return null;
  }

  const { Content: BodyContent } = content.body.render();
  return <BodyContent />;
}