import Card from './Card';

const Results = ({ results }) => {
  return (
    <div className="w-full grid px-5  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4 gap-5">
      {results.map(result => (
        <Card key={result.id} {...result} />
      ))}
    </div>
  );
};

export default Results;
