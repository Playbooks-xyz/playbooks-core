import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

import { computeTailwind } from '@ehubbell/html';
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Colors,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js';

const Chart = ({ type = 'line', data = {}, options, theme, tailwind = {} }) => {
	const className = computeTailwind(tailwind);

	// Computed
	ChartJS.register(BarElement, CategoryScale, Colors, Tooltip, Legend, LinearScale, PointElement, LineElement);

	ChartJS.defaults.borderColor = theme?.isDark ? '#334155' : '#e2e8f0';
	ChartJS.defaults.color = '#9EA7B3';
	ChartJS.defaults.elements.line.borderWidth = 2;
	ChartJS.defaults.elements.line.borderJoinStyle = 'round';
	ChartJS.defaults.font.family = 'Inter';
	ChartJS.defaults.font.size = 14;
	ChartJS.defaults.font.weight = 'normal';
	ChartJS.defaults.layout.padding = 0;

	const computedOptions = {
		responsive: true,
		interactions: {
			axis: 'y',
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: 'Custom Chart',
			},
			tooltip: {
				intersect: false,
				position: 'nearest',
			},
		},
		scales: {
			x: {
				display: true,
			},
			y: {
				display: true,
			},
		},
		...options,
	};

	const props = { data, options: computedOptions, className };

	// Render
	switch (type) {
		case 'bar':
			return <BarWrapper {...props} />;

		case 'doughnut':
			return <DoughnutWrapper {...props} />;

		case 'line':
			return <LineWrapper {...props} />;

		case 'pie':
			return <PieWrapper {...props} />;
	}
};

const BarWrapper = ({ data, options, className }) => {
	// Render
	return <Bar options={options} data={data} />;
};

const DoughnutWrapper = ({ data, options, className }) => {
	// Render
	return <Doughnut options={options} data={data} />;
};

const LineWrapper = ({ data, options, className }) => {
	// Render
	return <Line options={options} data={data} />;
};

const PieWrapper = ({ data, options, className }) => {
	// Render
	return <Pie options={options} data={data} />;
};

export { Chart };

// Docs
// https://www.npmjs.com/package/react-chartjs-2
// https://react-chartjs-2.js.team/components/

/*
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Revenue',
      data: revenueData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}
*/
