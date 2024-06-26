import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu, MenuItem, ListItem, ListItemAvatar, ListItemText, Avatar, Badge } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nui from '../../../util/Nui';
import { useQualifications } from '../../../hooks';
import UnitMember from './UnitMember';
import UnitIcon from './UnitIcon';
import UnitTypeMenu from './UnitTypeMenu';
import SubUnitMenu from './SubUnitMenu';

const useStyles = makeStyles((theme) => ({
	ava: {
		transition: 'filter ease-in 0.15s',
		fontSize: 14,
		'&.police': {
			backgroundColor: '#247ba5',
			color: theme.palette.text.main,
		},
		'&.ems': {
			backgroundColor: '#760036',
			color: theme.palette.text.main,
		},
		'&.prison': {
			backgroundColor: '#3EA99F',
			color: theme.palette.text.main,
		},
		'&.invalid': {
			backgroundColor: '#6e1616',
			color: theme.palette.text.main,
		},
		'&.unavailable': {
			backgroundColor: '#D69200',
			color: theme.palette.text.main,
		},
		'&.clickable:hover': {
			filter: 'brightness(0.7)',
			cursor: 'pointer',
		},
	},
	item: {},
}));

export default ({ unitType, unitData, missingCallsign }) => {
	const classes = useStyles();
	const hasQual = useQualifications();
	const user = useSelector((state) => state.app.user);
	const onDuty = useSelector((state) => state.alerts.onDuty);
	const job = useSelector((state) => state.app.govJob);
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(null);

	const PursuitModeColor = (mode) => {
		let color = "secondary";
		switch (mode) {
			case "S":
				color = "primary";
				break;
			case "A":
				color = "success";
				break;
			default:
			// code block
		}
		return color;
	}

	const changeUnit = async (newType) => {
		try {
			await Nui.send('ChangeUnit', {
				job: open.job,
				primary: open.primary,
				type: newType,
			});
			setOpen(null);
		} catch (err) {
			console.log(err);
		}
	};

	const toggleAvailability = async () => {
		try {
			await Nui.send('ToggleAvailability', {
				job: open.job,
				primary: open.primary,
			});
			setOpen(null);
		} catch (err) {
			console.log(err);
		}
	};

	const operateUnder = async () => {
		try {
			await Nui.send('OperateUnder', {
				job: open.job,
				primary: open.primary,
				unit: user.Callsign,
			});
			setOpen(null);
		} catch (err) {
			console.log(err);
		}
	};

	const assignTo = async () => {
		try {
			await Nui.send('OperateUnder', {
				job: open.job,
				primary: user.Callsign,
				unit: open.primary,
			});
			setOpen(null);
		} catch (err) {
			console.log(err);
		}
	};

	const breakOff = async () => {
		try {
			await Nui.send('BreakOff', {
				job: open.job,
				primary: open.primary,
				unit: user.Callsign,
			});
			setOpen(null);
		} catch (err) {
			console.log(err);
		}
	};

	const removeUnit = async (unit) => {
		try {
			await Nui.send('BreakOff', {
				job: open.job,
				primary: user.Callsign,
				unit: unit,
			});
			setOpen(null);
		} catch (err) {
			console.log(err);
		}
	};

	if (missingCallsign && unitType != 'tow') {
		return (
			<>
				<ListItem className={classes.item}>
					<ListItemAvatar>
						<Avatar className={`${classes.ava} invalid`}>
							<FontAwesomeIcon icon={['fas', 'octagon-exclamation']} />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						//primary={unitData.primary}
						primary={`${unitData.First[0]}. ${unitData.Last}`}
						secondary="Unset Callsign"
					/>
				</ListItem>
			</>
		);
	}

	return (
		<>
			{unitType === 'police' ? (
				<ListItem divider className={classes.item}>
					<ListItemAvatar>
						{unitData.pursuitMode != "N/A" && <Badge badgeContent={unitData.pursuitMode} color={PursuitModeColor(unitData.pursuitMode)} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
							<Avatar
								className={`${classes.ava} police${job.Id == 'police' ? ' clickable' : ''} ${!unitData.available ? 'unavailable' : ''}`}
								onClick={
									job.Id == 'police'
										? (e) => {
											setAnchorEl(e.currentTarget);
											setOpen({
												...unitData,
												job: 'police',
											});
										}
										: null
								}
							>
								<UnitIcon job="police" type={unitData.type} available={unitData.available} />
							</Avatar>
						</Badge>}
						{unitData.pursuitMode == "N/A" &&
							<Avatar
								className={`${classes.ava} police${job.Id == 'police' ? ' clickable' : ''} ${!unitData.available ? 'unavailable' : ''}`}
								onClick={
									job.Id == 'police'
										? (e) => {
											setAnchorEl(e.currentTarget);
											setOpen({
												...unitData,
												job: 'police',
											});
										}
										: null
								}
							>
								<UnitIcon job="police" type={unitData.type} available={unitData.available} />
							</Avatar>}
					</ListItemAvatar>
					<ListItemText
						primary={<UnitMember callsign={unitData.primary} isPrimary />}
						secondary={
							unitData.units.length > 0 ? (
								<span>
									{unitData.units.map((callsign, k) => (
										<UnitMember
											key={callsign}
											callsign={callsign}
											isLast={k === unitData.units.length - 1}
										/>
									))}
								</span>
							) : null
						}
					/>
				</ListItem>
			) : unitType === 'ems' ? (
				<ListItem divider className={classes.item}>
					<ListItemAvatar>
						<Avatar
							className={`${classes.ava} ems${job.Id == 'ems' ? ' clickable' : ''} ${!unitData.available ? 'unavailable' : ''}`}
							onClick={
								job.Id == 'ems'
									? (e) => {
										setAnchorEl(e.currentTarget);
										setOpen({
											...unitData,
											job: 'ems',
										});
									}
									: null
							}
						>
							<UnitIcon job="ems" type={unitData.type} available={unitData.available} />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={<UnitMember callsign={unitData.primary} isPrimary />}
						secondary={
							unitData.units.length > 0 ? (
								<span>
									{unitData.units.map((callsign, k) => (
										<UnitMember
											key={callsign}
											callsign={callsign}
											isLast={k === unitData.units.length - 1}
										/>
									))}
								</span>
							) : null
						}
					/>
				</ListItem>
			) : unitType === 'prison' ? (
				<ListItem divider className={classes.item}>
					<ListItemAvatar>
						<Avatar
								className={`${classes.ava} prison${job.Id == 'prison' ? ' clickable' : ''} ${!unitData.available ? 'unavailable' : ''}`}
								onClick={
									job.Id == 'prison'
										? (e) => {
											setAnchorEl(e.currentTarget);
											setOpen({
												...unitData,
												job: 'prison',
											});
										}
										: null
								}
							>
							<UnitIcon job="prison" type={unitData.type} available={unitData.available} />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={<UnitMember callsign={unitData.primary} isPrimary />}
						secondary={
							unitData.units.length > 0 ? (
								<span>
									{unitData.units.map((callsign, k) => (
										<UnitMember
											key={callsign}
											callsign={callsign}
											isLast={k === unitData.units.length - 1}
										/>
									))}
								</span>
							) : null
						}
					/>
				</ListItem>
			) : unitType === 'tow' ? (
				<ListItem divider className={classes.item}>
					<ListItemText
						primary={
							<UnitMember
								isTow={unitData?.SID}
								callsign={`${unitData?.First} ${unitData?.Last}`}
								isPrimary
							/>
						}
						secondary={unitData.Phone}
					/>
				</ListItem>
			) : null}
			<Menu anchorEl={anchorEl} open={open != null} onClose={() => setOpen(null)}>
				{Boolean(open) && (
					<div>
						<ListItem disabled>Unit: {open.primary}</ListItem>
						{open.primary != user.Callsign && !open.units.includes(user.Callsign) && (
							<ListItem button onClick={operateUnder}>
								Operate Under
							</ListItem>
						)}

						{open.primary != user.Callsign && open.units.includes(user.Callsign) && (
							<ListItem button onClick={breakOff}>
								Break Off From {open.primary}
							</ListItem>
						)}

						{open.primary != user.Callsign &&
							open.units.length == 0 &&
							onDuty.filter((u) => u.units.includes(user.Callsign)).length == 0 &&
							hasQual('PD_FTO') && (
								<ListItem button onClick={assignTo}>
									Operate Under Me
								</ListItem>
							)}

						{open.primary == user.Callsign && open.units.length > 0 && (
							<SubUnitMenu unit={open} onChange={removeUnit} />
						)}

						<MenuItem onClick={toggleAvailability}>
							Toggle Availability
						</MenuItem>

						{(open.primary == user.Callsign || open.units.includes(user.Callsign)) && (
							<UnitTypeMenu unit={open} onChange={changeUnit} />
						)}
					</div>
				)}
			</Menu>
		</>
	);
};
