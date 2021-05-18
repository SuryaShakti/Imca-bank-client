import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import Link from "../src/Link";
import { useRouter } from "next/router";

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: "#4fc3f7",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  const Router = useRouter();

  const categories = [
    {
      id: "Master Data",
      children: [
        {
          id: "Educational Boards",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/educational-boards",
          href: "/educational-boards",
        },
        {
          id: "Educational Mediums",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/educational-mediums",
          href: "/educational-mediums",
        },
        {
          id: "Institution Type",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/institution-types",
          href: "/institution-types",
        },
        {
          id: "Educational Qualification",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/educational-qualification",
          href: "/educational-qualification",
        },
        {
          id: "Classes",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/classes",
          href: "/classes",
        },
        {
          id: "Advertisement",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/advertisement",
          href: "/advertisement",
        },
      ],
    },
    {
      id: "Users",
      children: [
        {
          id: "Students",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/all-students",
          href: "/all-students",
        },
        {
          id: "Teachers",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/all-teachers",
          href: "/all-teachers",
        },
        {
          id: "Institutions",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/all-institutions",
          href: "/all-institutions",
        },
      ],
    },
    {
      id: "Courses",
      children: [
        {
          id: "All Courses",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/courses",
          href: "/courses",
        },
      ],
    },
    {
      id: "Requests",
      children: [
        {
          id: "Course Requests",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/course-requests",
          href: "/course-requests",
        },
        {
          id: "Seat Requests",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/coupons-requests",
          href: "/coupons-requests",
        },
      ],
    },
    {
      id: "Transactions",
      children: [
        {
          id: "Transactions Details",
          icon: <DnsRoundedIcon />,
          active: Router.pathname === "/transactions",
          href: "/transactions",
        },
      ],
    },
  ];

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <div style={{width: "100%", backgroundColor: "#232f3e", display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0"  }}>
          <img style={{width: "65%", borderRadius: "50%", cursor: "pointer"}} src="logo.jpg" 
           onClick={()=>Router.push("/")} />
        </div>
        <ListItem
          onClick={()=>Router.push("/")}
          style={{cursor: 'pointer'}}
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          {"Utkal Learning"}
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, href }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
                component={Link}
                href={href}
                as={href}
                style={{
                  textDecoration: "none",
                  height: 40,
                }}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
