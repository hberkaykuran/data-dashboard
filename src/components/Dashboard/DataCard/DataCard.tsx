import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import scss from "./DataCard.module.scss";
import { InfoOutlined } from "@mui/icons-material";
export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};
const DataCard = ({ title, value, description }: DataCardProps) => {
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography variant={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography
              fontSize={"16"}
            >{`${description} which is ${value}`}</Typography>
          }
        >
          <IconButton>
            <InfoOutlined />
          </IconButton>
        </Tooltip>
      </div>
      <Typography variant={"h4"}>{value}</Typography>
    </Paper>
  );
};

export default DataCard;
