import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail } from './components';
import About from './components/About';

const App = () => {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<Box sx={{ backgroundColor: '#000' }}>
					<Navbar />

					<Routes>
						<Route
							path={`/`}
							exact
							element={<Feed />}
						/>
						<Route
							path={`/About`}
							exact
							element={<About />}
						/>

						<Route
							path={`/video/:id`}
							exact
							element={<VideoDetail />}
						/>
						<Route
							path={`/channel/:id`}
							exact
							element={<ChannelDetail />}
						/>
					</Routes>
				</Box>
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default App;
