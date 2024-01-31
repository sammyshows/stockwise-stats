import { useEffect, useState } from 'react';

import UserStats from '@/components/Letterlock/Insights/UserStats';
import AdsStats from '@/components/Letterlock/Insights/AdsStats';
import LevelsStats from '@/components/Letterlock/Insights/LevelsStats';


export default function Insights() {
  const [userStats, setUserStats] = useState({} as any);
  const [adsStats, setAdsStats] = useState({} as any);
  const [levelsMostAds, setLevelsMostAds] = useState([]);
  const [levelsDifficult, setLevelsDifficult] = useState([]);
  const [levelsEasy, setLevelsEasy] = useState([]);

  useEffect(() => {
    const getStats = async (): Promise<void> => {
      return await fetch('/api/letterlock-insights-read')
        .then(response => response.json())
        .then(res => {
          setUserStats(res.users)
          setAdsStats(res.ads)
          setLevelsMostAds(res.levelsMostAds)
          setLevelsDifficult(res.levelsDifficult)
          setLevelsEasy(res.levelsEasy)
        });
    }
    getStats()
  }, []);

  return (
    <div className="grow px-10 py-10 overflow-scroll bg-slate-100">
      <h1 className="text-5xl pb-10 font-semibold text-blue-600">Insights</h1>

      <div className="flex flex-col gap-y-6">
        <div className="flex">
          <UserStats
            usersActive1Day={userStats.users_active_1_day}
            usersActive7Days={userStats.users_active_7_days}
            usersActive28Days={userStats.users_active_28_days}
            usersNew1Day={userStats.users_new_1_day}
            usersNew7Days={userStats.users_new_7_days}
            usersNew28Days={userStats.users_new_28_days}
          />

          <AdsStats
            androidUsers={ userStats.android_users }
            iosUsers={ userStats.ios_users }
            adsToday={ adsStats.ads_today }
            adsYesterday={ adsStats.ads_yesterday }
            adsTodayLastWeek={ adsStats.ads_today_last_week }
            adsLives={ adsStats.ads_lives }
            adsMoves={ adsStats.ads_moves }
            adsLivesAverage={ adsStats.ads_lives_average }
            adsMovesAverage={ adsStats.ads_moves_average }
            adsStreakAverage={ adsStats.ads_streak_average }
          />
        </div>
        <LevelsStats 
          levelsDifficult={ levelsDifficult }
          levelsEasy={ levelsEasy }
          levelsMostAds={ levelsMostAds }
        />
      </div>
    </div>
  )
}
