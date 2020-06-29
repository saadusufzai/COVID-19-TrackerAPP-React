import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  clickableIcon: {
    marginRight: "10px",
    color: "red",
    "&:hover": {
      opacity:'0.7',
      cursor:'pointer',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header({ handelInput, countries }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' position="bottom">
        <Toolbar>
        <Typography className={classes.title} variant="subtitle" noWrap>
            Developed by <Link
             href='https://www.facebook.com/saadusufzai'
             target='_blank'
             rel='noopener'
            >Saad Aslam</Link>
          </Typography>
          <Link className={classes.clickableIcon}
            
             href='https://www.youtube.com/channel/UCQUzFN8_vjiSwdxnxxNpd0Q'
             target='_blank'
             rel='noopener' >
            <YouTubeIcon></YouTubeIcon>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
