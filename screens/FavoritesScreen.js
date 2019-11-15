import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';
import HeaderButton from '../components/HeaderButton';
import BodyText from '../components/ui/BodyText';

const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.favoriteMeals);
	if (favMeals.length === 0) {
		return (
			<View style={styles.container}>
				<BodyText>No meal added to favorites</BodyText>
			</View>
		);
	}
	return <MealsList navigation={props.navigation} listData={favMeals} />;
};

FavoritesScreen.navigationOptions = data => {
	return {
		title: 'Favorites Meals',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Menu'
					iconName='menu'
					onPress={() => data.navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default FavoritesScreen;
