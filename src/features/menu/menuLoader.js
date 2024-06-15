import { getMenu } from '../../services/apiRestaurant';

export default async function loader() {
  const menu = await getMenu();
  return menu;
}
