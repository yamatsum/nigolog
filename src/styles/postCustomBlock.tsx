import { css } from "styled-components";

const postCustomBlockStyle = css`
  .custom-block {
    margin: 1em 0;
    background: ${props => props.theme.colors.whitesmoke};
  }
  .custom-block-heading {
    font-weight: 600;
    .emoji {
      width: 1.2em !important;
      height: 1.2em !important;
      vertical-align: -0.2em !important;
    }
  }
  .custom-block-body {
    font-size: 0.92em;
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  }
  & > *:first-child {
    margin-top: 0;
  }
  .custom-block.simple {
    padding: 1em 1.2em;
    border-radius: 5px;
    .custom-block-heading {
      font-size: 1.1em;
    }
  }
  .custom-block.info,
  .custom-block.alert,
  .custom-block.notice {
    padding: 0.7em 1em;
    border-left: solid 4px ${props => props.theme.colors.highlight};
    border-radius: 1px 3px 3px 1px;
  }
  .custom-block.alert {
    border-left-color: ${props => props.theme.colors.red};
    background: #ffeff0;
    .custom-block-heading {
      color: ${props => props.theme.colors.red};
    }
  }
  .custom-block.notice {
    border-left-color: ${props => props.theme.colors.orange};
    background: #fff4df;
    .custom-block-heading {
      color: ${props => props.theme.colors.orange};
    }
  }
`;

export default postCustomBlockStyle;
