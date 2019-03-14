/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import MoneyIcon from '@material-ui/icons/Money';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@sitb/wbs/mui/withStyles';

const styles: any = theme => ({
  root: {
    paddingTop: 20
  },
  paper: {
    padding: 24,
    width: '25%'
  },
  gridRight: {
    textAlign: 'right'
  },
  icon: {
    fontSize: 60
  },
  title: {
    color: '#8e8c8c'
  }
});

@withStyles(styles)
export class Dashboard extends React.PureComponent<any, any> {

  renderContent(config) {
    const {classes} = this.props;
    return config.map((item, index) => (
      <Paper className={classes.paper}
             key={index}
      >
        <Grid container
              alignItems="center"
              justify="space-between"
        >
          <Grid item>
            <MoneyIcon className={classes.icon}/>
          </Grid>
          <Grid item
                className={classes.gridRight}
          >
            <Typography variant="h5"
                        component="h3"
                        className={classes.title}
            >
              {item.title}
            </Typography>
            <Typography component="h2"
                        variant="h4"
            >
              {item.value}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    ));
  }

  render() {
    const {classes} = this.props;
    const config = [{
      title: '总笔数',
      value: '123992000'
    }, {
      title: '总金额',
      value: '200003'
    }, {
      title: '今日收入',
      value: '4444'
    }, {
      title: '今日笔数',
      value: '666'
    }];
    return (
      <Grid className={classes.root}
            container
      >
        {
          this.renderContent(config)
        }
      </Grid>
    )
  }
}
