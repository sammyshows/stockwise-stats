interface UsersTableRowProp {
  index: number,
  id: string,
  levelsCompleted: number,
  adsWatchedCount: number,
  zeroLivesCount: number,
  letterlockVersion: string,
  username: string,
  deviceModel: string,
  deviceOS: string,
  updatedAt: string,
  createdAt: string,
  levelAttempts1Day: number,
  levelAttempts7Days: number,
  levelAttempts28Days: number,
  levelSuccesses1Day: number,
  levelSuccesses7Days: number,
  levelSuccesses28Days: number
}

export type { UsersTableRowProp }
