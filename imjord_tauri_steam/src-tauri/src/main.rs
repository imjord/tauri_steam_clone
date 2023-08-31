// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};



// TRACK SIGNED ACCOUNTS 
// #[tauri::command]
// async fn create


#[tauri::command]
async fn close_accounts(window: tauri::Window) {
  // Close accounts
  if let Some(accounts) = window.get_window("accounts") {
    accounts.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

fn main() {
    tauri::Builder::default().setup(|app| {
      let window = app.get_window("main").unwrap();

      #[cfg(target_os = "macos")]
      apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, Some(16.0))
        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

      #[cfg(target_os = "windows")]
      apply_blur(&window, Some(16.0))
        .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

      Ok(())
    })
        .invoke_handler(tauri::generate_handler![close_accounts])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

