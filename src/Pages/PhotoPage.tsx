import { useNavigate, useParams } from 'react-router-dom';

export function PhotoPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      Photo
      <div>id={id}</div>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
