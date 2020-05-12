
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { mdiCompassRose } from '@mdi/js';
import Icon from '@mdi/react';
import { LegendExpander, LegendExpanderDetails, LegendExpanderSummary } from '../theme/expander';
import { IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import '../styles/legend.scss';

const Legend = () => ( 
    <LegendExpander elevation={0}>
        <LegendExpanderSummary>
            <IconButton>
                <Icon path={mdiCompassRose} size={3} />
            </IconButton>
        </LegendExpanderSummary>
        <LegendExpanderDetails>
            <p><Typography variant="h2">Legend</Typography></p>
            <TableContainer>
                <Table size="small">
                    <TableBody>
                        <TableRow>
                            <TableCell align="left"><div className="legend__marraige"></div></TableCell>
                            <TableCell align="right">Marraige</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left"><span className="legend__husband">↟</span></TableCell>
                            <TableCell align="right">Husband (click to show family)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </LegendExpanderDetails>
    </LegendExpander>
);

export default Legend;