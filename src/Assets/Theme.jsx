import { createTheme } from '@mui/material/styles';

var baseTheme = {
	palette: {
		type: 'dark',
		background: {
			default: "#000",
		},
		text: {
			primary: "#fff"
		},
	},
	typography: {
		h1: {
			fontSize: "32px",
			fontWeight: 700,
		},
		h2: {
			fontSize: "20px",
			fontWeight: 600
		},
		h3: {
			fontSize: "18px",
			fontWeight: 600,
		},

		fontFamily: "'Inter','Roboto',sans-serif",
	},
	spacing: 16,
}
const theme = createTheme(baseTheme);

theme.overrides = {
	MuiButton: {
		root: {
			borderRadius: "32px",
			boxShadow: "0px 2px 5px rgba(0,0,0,0.25)",

		},

		// Name of the rule
		text: {
			fontSize: "15px",
			fontWeight: 500,
			textTransform: "none",
		},
	},
	MuiBottomNavigation: {
		root: {
			backgroundColor: "none",
			position: "fixed",
			bottom: 0,
		}
	}
}

theme.props = {
	MuiSelect: {
		variant: 'outlined'
	},
	MuiTextField: {
		variant: 'outlined'
	}
};

export default theme;