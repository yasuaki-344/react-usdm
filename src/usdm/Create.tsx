import React from "react";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const Create = (): JSX.Element => {
  const onClick = () => {
    // eslint-disable-next-line
    alert("clicked");
  };

  return (
    <div>
      <Typography gutterBottom variant="h4" color="primary">
        新規作成
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onClick}
      >
        要求事項追加
      </Button>
    </div>
  );
};

export default Create;
