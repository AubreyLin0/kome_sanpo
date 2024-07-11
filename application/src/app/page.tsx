import { getRestaurants } from "../api/restaurants";
import { getUser } from "../api/users";

export default async function Home() {
  const users = await getUser();
  const restaurants = await getRestaurants();
  return (
    <main className="flex flex-col items-center justify-between gap-10 p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to こめさんぽ</h1>
      <ul className="flex flex-wrap gap-8">
        {users.map((user) => (
          <li key={user.id} className="flex flex-col items-center">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
            {user.reviews.map((review) => (
              <p key={review.id}>
                {review.restaurant.name} {review.content}
              </p>
            ))}
            {user.savedRestaurants.map((savedItem) => (
              <p key={savedItem.id}>{savedItem.restaurant.name}</p>
            ))}
            {user.visitedRestaurants.map((visitedItem) => (
              <p key={visitedItem.id}>{visitedItem.restaurant.name}</p>
            ))}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-8">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="flex flex-col items-center">
            <p className="font-bold">{restaurant.name}</p>
            <p>{restaurant.genre}</p>
            <p>{restaurant.averageRating}</p>
            {restaurant.reviews.map((review) => (
              <p key={review.id}>
                {review.rating} - {review.content}
              </p>
            ))}
          </li>
        ))}
      </ul>
      <Link href="/list">list</Link>
    </main>
  );
}
