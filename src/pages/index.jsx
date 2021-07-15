import ProfileAvatar from "../components/ProfileAvatar"
import Card from "../components/Card"

export default function Home() {
  return (
    <div className="p-10 min-h-screen bg-backgroundDefault">
      <h2>Profile component</h2>
      <ProfileAvatar />

      <h2>Card component</h2>
      <Card>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laborum eum voluptate maxime maiores possimus saepe, officia cupiditate placeat. Veniam consectetur amet eaque hic animi molestias dolorum fugiat maiores blanditiis.
      </Card>
    </div>
  )
}
