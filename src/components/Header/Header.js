import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { NativeSelect, Link } from "@material-ui/core";
import github from '../../images/github.png'
import styles from './Header.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  clickableIcon: {
    marginRight: "10px",
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
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
      <AppBar position="fixed">
        <Toolbar>
       <Link className={styles.link} href='https://github.com/saadusufzai/COVID-19-TrackerAPP-React' target='blank'>
       <img className={styles.github} alt="git"   src={github} />
       </Link>

        
          <Typography className={classes.title} variant="h6" noWrap>
            COVID-19 Tracker App by Saad Aslam
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}></div>
            <FormControl>
              <NativeSelect onChange={handelInput} style={{ width: "100%" }}>
                <option value=""> Countries</option>
                {countries.map((country, i) => (
                  <option key={i} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
