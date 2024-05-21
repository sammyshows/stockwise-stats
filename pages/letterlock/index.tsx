import { useEffect, useState } from 'react';

import UserStats from '@/components/Letterlock/Insights/UserStats';
import AdsStats from '@/components/Letterlock/Insights/AdsStats';
import LevelsStats from '@/components/Letterlock/Insights/LevelsStats';


export default function Insights() {
  const [userStats, setUserStats] = useState({} as any);
  const [adsStats, setAdsStats] = useState({} as any);
  const [levelProgressStats, setLevelProgressStats] = useState({} as any);
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
          setLevelProgressStats(res.levelProgress)
          setLevelsMostAds(res.levelsMostAds)
          setLevelsDifficult(res.levelsDifficult)
          setLevelsEasy(res.levelsEasy)
        });
    }
    getStats()
  }, []);

  return (
    <div className="grow px-10 py-10 overflow-scroll bg-slate-100">
      {/* <h1 className="text-5xl pb-10 font-semibold text-blue-600">Insights</h1> */}

      <div className="flex flex-col">
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
            ads1Day={ adsStats.ads_1_day }
            ads7Days={ adsStats.ads_7_days }
            ads28Days={ adsStats.ads_28_days }
            adsLives={ adsStats.ads_lives }
            adsMoves={ adsStats.ads_moves }
            adsLivesAverage={ adsStats.ads_lives_average }
            adsMovesAverage={ adsStats.ads_moves_average }
            adsStreakAverage={ adsStats.ads_streak_average }
            levelAttempts1Day={ levelProgressStats.level_attempts_1_day }
            levelAttempts7Days={ levelProgressStats.level_attempts_7_days }
            levelAttempts28Days={ levelProgressStats.level_attempts_28_days }
            levelSuccesses1Day={ levelProgressStats.level_successes_1_day }
            levelSuccesses7Days={ levelProgressStats.level_successes_7_days }
            levelSuccesses28Days={ levelProgressStats.level_successes_28_days }
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
