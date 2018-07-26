package com.lireporter.connector;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.os.Parcelable;
import android.support.design.widget.Snackbar;
import android.text.TextUtils;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.reactlibrary.view.ListConnectionActivity;
import com.reactlibrary.view.NewConnectionActivity;

import java.util.ArrayList;
import java.util.List;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;
import static com.reactlibrary.util.FileUtil.isFileExistInDevice;

public class MenuModule extends ReactContextBaseJavaModule {

    ReactApplicationContext mreactContext;

    public MenuModule(ReactApplicationContext reactContext, Context context) {
        super(reactContext);
        mreactContext = reactContext;

    }
    @Override
    public String getName() {
        return "MenuExample";
    }

    @ReactMethod
    void setTitle(final String title){
        final Activity activity = getCurrentActivity();
        if(activity!=null){
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    activity.setTitle(title);
                }
            });
        }
    }

    @ReactMethod
    void showDownloadToast(String path,String fileName){

        MyCustomOnClickListener mOnClickListner = new MyCustomOnClickListener(path,fileName);


        Snackbar.make(getCurrentActivity().findViewById(android.R.id.content), fileName, Snackbar.LENGTH_LONG)
                .setAction("OPEN", mOnClickListner)
                .setActionTextColor(Color.rgb(18,200,253))
                .show();
    }

    @ReactMethod
    void startGraphicsViewerForSideView(String datauri){
        Intent sendIntent = new Intent();
        List<Intent> targetedShareIntents = new ArrayList<Intent>();
        String[] lines = datauri.split(",");

        String title = "View Order:" +lines[0] + " Item:" + lines[1] + "  in ....";
        sendIntent.setAction(Intent.ACTION_SEND);



        sendIntent.setType("text/plain");
        List<ResolveInfo> resInfo = getCurrentActivity().getPackageManager().queryIntentActivities(sendIntent, 0);
        if (!resInfo.isEmpty()) {
            for (ResolveInfo resolveInfo : resInfo) {
                String packageName = resolveInfo.activityInfo.packageName;
                Intent targetedShareIntent = new Intent(Intent.ACTION_SEND);
                targetedShareIntent.setType("text/plain");
                if ((TextUtils.equals(packageName, "com.ligraphicsviewer" ))|| (TextUtils.equals(resolveInfo.activityInfo.processName,"com.google.android.apps.docs:Clipboard" )))
                {
                    targetedShareIntent.setPackage(packageName);

                    targetedShareIntent.putExtra("Order No", lines[0]);
                    targetedShareIntent.putExtra("Item No", lines[1]);

                    targetedShareIntent.putExtra("fromOrderStatus",true);

                    targetedShareIntents.add(targetedShareIntent);
                }
            }
        }
        Intent chooserIntent = Intent.createChooser(targetedShareIntents.remove(0), title);
        chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, targetedShareIntents.toArray(new Parcelable[targetedShareIntents.size()]));
        getCurrentActivity().startActivity(chooserIntent);
    }

    @ReactMethod
    void startDocCenter(String orderNo,String docType){
        Intent sendIntent = new Intent();
        List<Intent> targetedShareIntents = new ArrayList<Intent>();
        String title = "View Order:" +orderNo + " in...";

        sendIntent.setAction(Intent.ACTION_SEND);




        sendIntent.setType("text/plain");
        List<ResolveInfo> resInfo = getCurrentActivity().getPackageManager().queryIntentActivities(sendIntent, 0);
        if (!resInfo.isEmpty()) {
            for (ResolveInfo resolveInfo : resInfo) {
                String packageName = resolveInfo.activityInfo.packageName;
                Intent targetedShareIntent = new Intent(Intent.ACTION_SEND);
                targetedShareIntent.setType("text/plain");
                if ((TextUtils.equals(packageName, "com.ligraphicsviewer" )) || (TextUtils.equals(packageName, "com.lidoccenter" ))|| (TextUtils.equals(resolveInfo.activityInfo.processName,"com.google.android.apps.docs:Clipboard" )))
                {
                    targetedShareIntent.setPackage(packageName);
                    targetedShareIntent.putExtra("OrderNo", orderNo);
                    targetedShareIntent.putExtra("DocType", docType);
                    targetedShareIntents.add(targetedShareIntent);
                }
            }
        }
        Intent chooserIntent = Intent.createChooser(targetedShareIntents.remove(0), title);
        chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, targetedShareIntents.toArray(new Parcelable[targetedShareIntents.size()]));
        getCurrentActivity().startActivity(chooserIntent);
    }

    @ReactMethod
    void startGraphicsViewer(String datauri){
        Intent sendIntent = new Intent();
        List<Intent> targetedShareIntents = new ArrayList<Intent>();

        sendIntent.setAction(Intent.ACTION_SEND);
        String[] lines = datauri.split(",");
        String title = "View Order:" +lines[0] + " Item:" + lines[1] + "  in ....";


        sendIntent.setType("text/plain");
        List<ResolveInfo> resInfo = getCurrentActivity().getPackageManager().queryIntentActivities(sendIntent, 0);
        if (!resInfo.isEmpty()) {
            for (ResolveInfo resolveInfo : resInfo) {
                String packageName = resolveInfo.activityInfo.packageName;
                Intent targetedShareIntent = new Intent(Intent.ACTION_SEND);
                targetedShareIntent.setType("text/plain");
                if ((TextUtils.equals(packageName, "com.ligraphicsviewer" ))|| (TextUtils.equals(resolveInfo.activityInfo.processName,"com.google.android.apps.docs:Clipboard" )))
                {
                    targetedShareIntent.setPackage(packageName);

                    targetedShareIntent.putExtra("Order No", lines[0]);
                    targetedShareIntent.putExtra("Item No", lines[1]);
                    targetedShareIntent.putExtra("Pane No", lines[2]);
                    targetedShareIntent.putExtra("Comp No", lines[3]);

                    targetedShareIntent.putExtra("fromOrderStatus",true);

                    targetedShareIntents.add(targetedShareIntent);
                }
            }
        }
        Intent chooserIntent = Intent.createChooser(targetedShareIntents.remove(0), title);
        chooserIntent.putExtra(Intent.EXTRA_INITIAL_INTENTS, targetedShareIntents.toArray(new Parcelable[targetedShareIntents.size()]));
        getCurrentActivity().startActivity(chooserIntent);
    }

    @ReactMethod
    public void startConnectionActivity(){
        if(mreactContext != null && !isFileExistInDevice(mreactContext)){
            Intent newconnectionIntent = new Intent(getCurrentActivity(), NewConnectionActivity.class);
            getCurrentActivity().startActivityForResult(newconnectionIntent, 2);
        }
        else{
            Intent listconnectionIntent = new Intent(getCurrentActivity(), ListConnectionActivity.class);
            getCurrentActivity().startActivityForResult(listconnectionIntent, 2);
        }

    }
}
