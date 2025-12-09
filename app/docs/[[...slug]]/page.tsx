import React from "react";

async function page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  if (slug.length === 2)
    return (
      <div>
        DOCS
        <br />
        {slug[0]} &nbsp;
        {slug[1]}
      </div>
    );

  if (slug.length === 1)
    return (
      <div>
        DOCS
        <br />
        {slug[0]}
      </div>
    );

  return (
    <div>
      DOCS
      <br />
      {slug}
    </div>
  );
}

export default page;
