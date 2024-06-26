/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Nui from '../../util/Nui';

const useStyles = makeStyles(theme => ({
    div: {
        border: `1px solid ${theme.palette.border.input}`,
        borderLeft: `4px solid ${theme.palette.border.input}`,
        background: theme.palette.secondary.dark,
        color: theme.palette.text.main,
        fontSize: 13,
        minHeight: 84,
        width: '100%',
        textAlign: 'center',
        userSelect: 'none',
        transition: 'filter ease-in 0.15s',
        padding: '10px 20px',
        marginBottom: 10,
        borderRadius: 0,
    },
    input: {
        width: '100%',
    },
}));

export default ({ data }) => {
    const classes = useStyles();
    const [value, setValue] = useState(
        data.options.current == null ? '' : data.options.current,
    );

    const onChange = event => {
        setValue(event.target.value);
        Nui.send('Selected', {
            id: data.id,
            data: { value: event.target.value },
        });
    };

    const cssClass = data.options.disabled
        ? `${classes.div} disabled`
        : classes.div;
    const style = data.options.disabled ? { opacity: 0.5 } : {};

    return (
        <div className={cssClass} style={style}>
            <TextField
                variant="standard"
                label={data.label}
                disabled={data.options.disabled}
                value={value}
                onChange={onChange}
                className={classes.input}
                type="number"
            />
        </div>
    );
};
