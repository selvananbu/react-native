package com.lireporter;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;

import com.facebook.react.ReactActivity;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.lireporter.view.HelloFragment;
import com.reactlibrary.JSBundleManager;
import com.reactlibrary.JSBundleManagerActivity;
import com.reactlibrary.model.Connection;
import com.reactlibrary.util.FileUtil;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;

import static com.reactlibrary.view.ListConnectionActivity.versionList;

public class MainActivity  extends JSBundleManagerActivity implements  JSBundleManager.Interface, DefaultHardwareBackBtnHandler, NavigationView.OnNavigationItemSelectedListener {


    private HelloFragment mViewFragment;
    private ReactInstanceManager mReactInstanceManager;
    public static ArrayList<String> menuString = new ArrayList<>();
    ReactApplicationContext menuContext;

    public void setMenuContext(ReactApplicationContext menuContext) {
        this.menuContext = menuContext;
    }

    public ReactApplicationContext getMenuContext() {
        return menuContext;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        mReactInstanceManager =
                ((MainApplication) getApplication()).getReactNativeHost().getReactInstanceManager();


        mViewFragment = new HelloFragment();

        if (mViewFragment != null) {
            mViewFragment.setMainApplication((ReactApplication) getApplication());
            mViewFragment.setmReactInstanceManager(mReactInstanceManager);
        }
        getSupportFragmentManager().beginTransaction().add(R.id.container, mViewFragment).commit();

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }


    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    public void onBackPressed() {
        isHomeScreen();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (!versionList.isEmpty()) {
            try {
                FileUtil.addConnectIonListToFile(getBaseContext(), versionList);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }

    @Override
    protected void refreshFragment() {

    }

    @Override
    protected void onStart() {
        super.onStart();
        super.onStart();
        if (updater == null) {
            updater = getBundleManager(getApplicationContext());

        }
        updater.setParentActivity(this);

    }

    /*
     * Any activity that uses the ReactFragment or ReactActivty
     * Needs to call onHostPause() on the ReactInstanceManager
     */
    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause();
        }
    }

    /*
     * Same as onPause - need to call onHostResume
     * on our ReactInstanceManager
     */
    @Override
    protected void onResume() {
        super.onResume();
        SharedPreferences myPrefs = PreferenceManager.getDefaultSharedPreferences(getBaseContext());

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
        if (mReactInstanceManager.getCurrentReactContext() == null) return;

    }

    public boolean isHomeScreen() {

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
            return true;
        } else {
            mReactInstanceManager.onBackPressed();
            return true;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == 1) {
            Bundle dataBundle = data.getExtras();
            Connection newConnection = dataBundle.getParcelable("URL");
            versionList.add(newConnection);
        } else {
            if (resultCode == Activity.RESULT_OK) {
                Bundle dataBundle = data.getExtras();
                Connection newConnection = dataBundle.getParcelable("URL");
                if (newConnection != null) {
                    versionList.add(newConnection);
                    JSBundleManagerActivity.getBundleManager(getApplicationContext()).setHostnameForRelativeDownloadURLs(newConnection.getConnectionUrl());
                    JSBundleManagerActivity.getBundleManager(getBaseContext()).setUpdateMetadataUrl(newConnection.getConnectionUrl() + "/android/LiReporter/update.json");
                    JSBundleManagerActivity.getBundleManager(getBaseContext()).setmAppName("LiReporter");
                    JSBundleManagerActivity.getBundleManager(getApplicationContext()).checkForUpdates();
                }
            }
        }
    }
}