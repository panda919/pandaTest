import styled from 'styled-components/native';
import { Metrics } from '@themes';

const hPaddingStyle = { paddingHorizontal: Metrics.medium };
const vPaddingStyle = { paddingVertical: Metrics.small };
const hMarginStyle = { marginHorizontal: Metrics.medium };
const vMarginStyle = { marginVertical: Metrics.small };
const fullWidthStyle = { width: '100%' };
interface ViewProps {
  readonly hPadding?: boolean;
  readonly vPadding?: boolean;
  readonly hMargin?: boolean;
  readonly vMargin?: boolean;
  readonly full?: boolean;
  readonly aspectRatio?: number;
  readonly height?: number | string;
  readonly width?: number | string;
}

export const RootBox = styled.View.attrs<ViewProps>(props => ({
  ...(props.hPadding && hPaddingStyle),
  ...(props.vPadding && vPaddingStyle),
  ...(props.hMargin && hMarginStyle),
  ...(props.vMargin && vMarginStyle),
  ...(props.full && fullWidthStyle),
  ...(props.aspectRatio && { aspectRatio: props.aspectRatio }),
  ...(props.height && { height: props.height }),
  ...(props.width && { width: props.width }),
}))``;

export const ColumnBox = styled(RootBox)`
  flex-direction: column;
`;
export const CenterBox = styled(RootBox)`
  align-items: center;
  justify-content: center;
`;
export const ColumnCenter = styled(RootBox)`
  align-items: center;
  justify-content: center;
`;
export const ColumnHCenter = styled(RootBox)`
  align-items: center;
`;
export const ColumnVCenter = styled(RootBox)`
  justify-content: center;
`;
export const RowBox = styled(RootBox)`
  flex-direction: row;
`;
export const RowSpaceBetween = styled(RowBox)`
  align-items: center;
  justify-content: space-between;
`;
export const RowSpaceAround = styled(RowBox)`
  align-items: center;
  justify-content: space-around;
`;
export const RowSpaceEvenly = styled(RowBox)`
  align-items: center;
  justify-content: space-evenly;
`;
export const RowCenter = styled(RowBox)`
  align-items: center;
  justify-content: center;
`;
export const RowLeft = styled(RowBox)`
  align-items: center;
  justify-content: flex-start;
`;
export const RowRight = styled(RowBox)`
  align-items: center;
  justify-content: flex-end;
`;

export const RowTop = styled(RowBox)`
  align-items: flex-start;
  justify-content: center;
`;
export const RowBottom = styled(RowBox)`
  align-items: flex-end;
  justify-content: center;
`;

export const RowTopLeft = styled(RowTop)`
  justify-content: flex-start;
`;
export const RowTopRight = styled(RowTop)`
  justify-content: flex-end;
`;

export const RowBottomLeft = styled(RowBottom)`
  justify-content: flex-start;
`;
export const RowBottomRight = styled(RowBottom)`
  justify-content: flex-end;
`;
