import { useRouter } from 'next/router';


function Ejemplo() {
  const router = useRouter();
  const id = router.query.newsId;

  return (
    <div><h1>Ejemplo</h1></div>
  )
}

export default Ejemplo
