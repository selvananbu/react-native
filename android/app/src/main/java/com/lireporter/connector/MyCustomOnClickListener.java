package com.lireporter.connector;

import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.net.Uri;
import android.view.View;
import android.widget.Toast;

import java.util.List;

public class MyCustomOnClickListener implements View.OnClickListener {
    String fileName;
    String path;

    public MyCustomOnClickListener(String path,String fileName){
        this.fileName = fileName;
        this.path  =   path;
    }

    @Override
    public void onClick(View v) {
        Intent intent = new Intent(Intent.ACTION_VIEW);
        Uri data = Uri.parse("file://" + path);
        intent.setDataAndType(data, "image/*");
        PackageManager pm = v.getContext().getPackageManager();
        List<ResolveInfo> activities = pm.queryIntentActivities(intent, 0);
        if (activities.size() > 0) {
            v.getContext().startActivity(intent);
        } else {
            // Do something else here. Maybe pop up a Dialog or Toast
            Toast.makeText(v.getContext(), "No App Please install a PDF Viewer",
                    Toast.LENGTH_LONG).show();
        }
    }
}
