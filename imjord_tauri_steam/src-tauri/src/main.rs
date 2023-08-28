// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use tauri::Manager;




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
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_accounts])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

