import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0

const HomePage = async () => {
  const billboard = await getBillboard("22c88e93-59fc-485b-a18a-347c33cb8f41")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage