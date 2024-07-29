import BlockContent from '@sanity/block-content-to-react';

type DT = {
  data: any;
};

const BlockContents = ({ data }: DT) => {
  return (
    <BlockContent blocks={data} projectId="j8t9esyp" dataset="production" />
  );
};

export default BlockContents;
