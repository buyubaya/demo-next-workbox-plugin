export const VAPID_PUBLIC_KEY = "BL2Kr6XuPfOOABUf_6suEi4iMMQ92YQP2p9i-kI9Bb5M5WyvMFDBMfduGo2V90c0IvQ65li-_Q-ZPc7aJx-KNSw";

export const VAPID_PRIVATE_KEY = "EsrTmMmeCvx3UL4D67Cj1_Yn6OuvW1rxo8yMRIjD-Qs";

export function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
 
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
 
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export const pushSubscription = {
  endpoint:
  'https://fcm.googleapis.com/fcm/send/eN8gqUQOVno:APA91bFQWv3JMVUY44-UleQyNV1MR5YmMvixQbn6u2jG5ziFZdxY9rhByhQcc43bQhA1voNMyqbLNvAXE06mPYCnwGRlWlkSlPcPKfdu2aZpCZkJ4BGLliv8w_xd-1NjkWZXmCgEFyxC',
  expirationTime: null,
  keys:
    { p256dh:
      'BJ0nR_fcH9Vzt_pxDtviknicGvFHlKBj_X0L6A0OdGaGvFkYRXIYdNIfa-ltycFv2yxU_z4leMOxsBtIP8-FYOE',
      auth: 'mf3mDZBQGuOpk46MOuq46w'
    }
}
