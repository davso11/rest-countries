import { cn } from '@/lib/utils';
import { Country } from '@/types';

type CountryCardProps = React.ComponentProps<'article'> & {
  country: Country;
};

export const CountryCard = ({ country, ...props }: CountryCardProps) => {
  return (
    <article
      className={cn('overflow-hidden rounded-md drop-shadow')}
      {...props}
    >
      {/* header */}
      <div className="h-40 w-full">
        <img
          src={country.flags.svg}
          alt={country.alpha3Code}
          className="h-full w-full object-cover"
        />
      </div>

      {/* content */}
      <div className="bg-primary space-y-4 px-5 pb-8 pt-6 text-sm">
        <h2 className="text-base font-extrabold">{country.name}</h2>
        <div>
          <p>
            <span className="font-semibold">Population: </span>
            {/* format: add dot or comma after 3 digits */}
            <span>{country.population.toLocaleString('en-EN')}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span>{country.region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </article>
  );
};
