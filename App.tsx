import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
	ImageBackground,
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	ActivityIndicator,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const App = () => {
  
	const getContent = () => {
		let [isLoading, setIsLoading] = useState(true);
		let [error, setError] = useState();
		const [data, setData] = useState<any>([]);

		useEffect(() => {
			fetch("https://mobile.codeworks.mv/api/v2/stations/2", {
				headers: new Headers({
					Authorization: "Bearer " + "ZdUtdWU82zD8DcJ2yw9IjQtt",
				}),
			})
      .then((resp) => resp.json())
      .then(
          (json) => setData(json),
      ).finally(() => setIsLoading(false))
      
      .catch(error => console.log('something is not suppose to be happening'))
		}, []);

		if (isLoading) {
			return <ActivityIndicator size="large" />;
		}

		return (
			<View className="flex flex-row p-5 gap-8 justify-center">
				<View className="flex items-center justify-center">
					<Svg
						className="w-12 h-12 text-green-500"
						viewBox="0 0 24 24"
						fill="none"
					>
						<Path
							d="M19.25 15.8095C19.25 17.8333 17.7949 19.25 16 19.25C14.2051 19.25 12.75 17.8333 12.75 15.8095C12.75 13.7857 16 10.75 16 10.75C16 10.75 19.25 13.7857 19.25 15.8095Z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M11.25 9.80952C11.25 11.8333 9.79493 13.25 8 13.25C6.20507 13.25 4.75 11.8333 4.75 9.80952C4.75 7.78571 8 4.75 8 4.75C8 4.75 11.25 7.78571 11.25 9.80952Z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
					</Svg>
					<Text className="text-base font-light text-gray-800">
						Humidity
					</Text>

					<Text className="text-2xl font-bold text-gray-800">
            {Math.round(data.hourly.humidity)}
            %
					</Text>
				</View>

				<View className="flex items-center justify-center">
					<Svg
						className="w-12 h-12 text-red-500"
						viewBox="0 0 24 24"
						fill="none"
					>
						<Path
							d="M10.75 4.75C9.64543 4.75 8.75 5.64543 8.75 6.75V11.3938C7.54892 12.1447 6.75 13.4791 6.75 15C6.75 17.3472 8.65279 19.25 11 19.25C13.3472 19.25 15.25 17.3472 15.25 15C15.25 13.4791 14.4511 12.1447 13.25 11.3938V6.75C13.25 5.64543 12.3546 4.75 11.25 4.75H10.75Z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M17.25 4.75H16.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M17.25 7.75H16.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M17.25 10.75H16.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M11 15.25V13"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
					</Svg>

					<Text className="text-base font-light text-gray-800">
						Temperature
					</Text>

					<Text className="text-2xl font-bold text-gray-800">
          {data.hourly.temperature} &#176;
					</Text>
				</View>

				<View className="flex items-center justify-center">
					<Svg
						className="w-12 h-12 text-blue-500"
						viewBox="0 0 24 24"
						fill="none"
					>
						<Path
							d="M10.75 7.25H17.25C18.3546 7.25 19.25 6.35457 19.25 5.25V4.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M12.25 12.25H7.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M7.25 7.25H4.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M10.25 16.75H4.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M19.25 12.25H15.75"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
						<Path
							d="M13.75 16.75H17.25C18.3546 16.75 19.25 17.6454 19.25 18.75V19.25"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						></Path>
					</Svg>

					<Text className="text-base font-light text-gray-800">
						Wind / {data!.hourly.wind_direction}
					</Text>

					<Text className="text-2xl font-bold text-gray-800">
						{data!.hourly.wind_speed } mph
					</Text>
				</View>
			</View>
		);
	};
	return (
		<View className="flex-1">
			<ImageBackground
				source={require("./assets/Scene-7.jpg")}
				resizeMode="cover"
				className="flex-1 w-full"
			>
				<SafeAreaView className="flex-1 items-center justify-center">
					<View className="w-full px-5 opacity-90 flex-1">
						<View className="flex flex-row gap-2">
							<Svg
								className="text-white h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
							>
								<Path
									d="M10 14L12.75 19.25L19.25 4.75L4.75 11.75L10 14Z"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></Path>
							</Svg>

							<MaskedView
								maskElement={
									<Text className="text-2xl font-light">
										Hanimaadhoo
									</Text>
								}
							>
								<LinearGradient
									colors={["#E4E6FC", "white"]}
									start={{ x: 0, y: 0 }}
									end={{ x: 2, y: 1 }}
								>
									<Text className="text-2xl font-bold opacity-0">
										Hanimaadhoo
									</Text>
								</LinearGradient>
							</MaskedView>
						</View>

						<View className="w-full py-12 flex-1">
							<MaskedView
								maskElement={
									<Text className=" text-9xl font-extrabold">
										{" "}
										23 &#176;
									</Text>
								}
							>
								<LinearGradient
									colors={["#E4E6FC", "white"]}
									start={{ x: 0, y: 0 }}
									end={{ x: 2, y: 1 }}
								>
									<Text className="text-9xl font-extrabold opacity-0">
										23 &#176;
									</Text>
								</LinearGradient>
							</MaskedView>
						</View>
					</View>

					<View className="bg-white py-4 rounded-t-3xl w-full">
						<Text className="text-center text-xl font-bold text-gray-800">
							Weather Today
						</Text>
						{getContent()}
					</View>
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
};

export default App;
