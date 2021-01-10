import React, { useReducer } from "react";
import { Button, Grid, Typography, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// eslint-disable-next-line
import usdmReducer, { addHighOrderRequirement } from "./UsdmReducer";

type UpperRequirement = {
  id: number;
  content: string;
};

const Create = (): JSX.Element => {
  // eslint-disable-next-line
  const [usdm, setUsdm] = useReducer(usdmReducer, {
    requirements: [{ id: 1, content: "要求項目" }],
  });

  const onClick = () => {
    // eslint-disable-next-line
    setUsdm(addHighOrderRequirement());
  };

  return (
    <div>
      <Typography gutterBottom variant="h4" color="primary">
        新規作成
      </Typography>
      <Grid container alignItems="flex-start" spacing={2}>
        <Paper style={{ padding: 16 }}>
          {usdm.requirements.map((requirement: UpperRequirement) => (
            <Grid item xs={12}>
              <div key={requirement.id}>
                上位要求の項目{requirement.content}
              </div>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={onClick}
            >
              要求事項追加
            </Button>
          </Grid>
        </Paper>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={onClick}
          >
            登録
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Create;
