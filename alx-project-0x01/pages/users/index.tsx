
import UserCard from '@/components/common/UserCard'; // Import the UserCard component
import Header from '@/components/layout/Header'; // Assuming you have a Header component
import { UserProps } from '@/interfaces'; // Import the UserProps interface

const Users: React.FC = ({ users }) => {
      console.log(users)
return(
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Use min-h-screen for full height */}
      <Header /> {/* Your header component */}
      <main className="p-4 md:p-8 flex-grow"> {/* flex-grow to make main take available space */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Our Users</h1>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors duration-300">
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.map((user: UserProps) => (
            <UserCard key={user.id} {...user} /> // Pass all user props using spread operator
          ))}
        </div>
      </main>
    </div>
)
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;