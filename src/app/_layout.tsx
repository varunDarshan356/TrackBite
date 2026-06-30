import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen
        name="edit-meal"
        options={{
          headerShown: true,
          title: "Edit Meal",
        }}
      />
    </Stack>
  );
}
