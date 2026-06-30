import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const requestPermissions = async (): Promise<boolean> => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
};

export const scheduleMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Morning engagement reminder
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "TrackBite",
      body: "Good morning! Start your day by logging your breakfast",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 8,
      minute: 0,
    },
  });

  // Lunch reminder
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "TrackBite",
      body: "Don't forget to log your lunch!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 12,
      minute: 0,
    },
  });

  // Dinner reminder
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "TrackBite",
      body: "Time to log your dinner!",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: 20,
      minute: 0,
    },
  });
};

export const cancelMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
