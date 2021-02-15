import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import icon from "../../assets/images/url_icon.svg";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function CopyLinkBtn({ characater, tag }) {
  let url =
    "https://travelmbti.com/copy_result?char=" + characater + "&tag=" + tag; // url 복사
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    setIsCopied(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsCopied(false);
  };

  return (
    <>
      <CopyToClipboard text={url} onCopy={handleClick}>
        <button>
          <img src={icon} alt="alt" />
        </button>
      </CopyToClipboard>
      <Snackbar open={isCopied} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copied!
        </Alert>
      </Snackbar>
    </>
  );
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
