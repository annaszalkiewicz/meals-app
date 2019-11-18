import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/category-db';
import MealsList from '../components/MealsList';
import BodyText from '../components/ui/BodyText';

const MealCategoryScreen = props => {
	const categoryId = props.navigation.getParam('categoryId');
	const availableMeals = useSelector(state => state.meals.filteredMeals);
	const mealsInCategory = availableMeals.filter(
		meal => meal.categoryIds.indexOf(categoryId) >= 0
	);

	if (mealsInCategory.length === 0) {
		return (
			<View style={styles.container}>
				<BodyText>No meal found. Maybe try other filters?</BodyText>
			</View>
		);
	}

	return <MealsList navigation={props.navigation} listData={mealsInCategory} />;
};

MealCategoryScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam('categoryId');
	const currentCategory = CATEGORIES.find(c => c.id === categoryId);
	return {
		title: currentCategory.title
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MealCategoryScreen;
