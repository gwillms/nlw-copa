interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <h1 className="text-teal-400">Contagem: {props.count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:6333/pools/count')
  const data = await response.json()

  return {
    props: {
      count: data.count,  
    }
  }
}

