import Image from 'next/image';

export default function UsersTableHead({ sortField, sortDirection, onSort }) {
  const getChevronClass = (field) => {
    if (sortField === field) {
      return sortDirection === 'asc' ? '' : 'rotate-0';
    }
    return 'invisible';
  };

  return (
    <div className="flex items-center py-1 px-2 border-b border-gray-300 text-sm text-slate-600 font-semibold sticky top-0 bg-ll-orange" style={{ fontFamily: 'Poppins-Regular' }}>
      <p className="w-12 px-2 text-center">#</p>
      <p className="w-40 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('username')}>
        Username
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('username')}`} width={12} height={12} />
      </p>
      <p className="w-32 grow px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('device_model')}>
        Device Model
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('device_model')}`} width={12} height={12} />
      </p>
      <p className="w-32 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('levels_completed_count')}>
        Current Level
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('levels_completed_count')}`} width={12} height={12} />
      </p>
      <p className="w-32 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('ads_watched_count')}>
        Ads Watched
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('ads_watched_count')}`} width={12} height={12} />
      </p>
      <p className="w-28 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('zero_lives_tally')}>
        No Life Count
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('zero_lives_tally')}`} width={12} height={12} />
      </p>
      <p className="w-40 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('letterlock_version')}>
        Letter Lock Version
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('letterlock_version')}`} width={12} height={12} />
      </p>
      <p className="w-28 px-2 text-center flex items-center justify-center">
        Device OS
      </p>
      <p className="w-28 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('updated_at')}>
        Updated At
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('updated_at')}`} width={12} height={12} />
      </p>
      <p className="w-28 px-2 text-center cursor-pointer flex items-center justify-center" onClick={() => onSort('created_at')}>
        Created At
        <Image src="/icons/chevron.svg" alt="chevron" className={`ml-1 transition-transform duration-300 rotate-180 ${getChevronClass('created_at')}`} width={12} height={12} />
      </p>
    </div>
  );
}
