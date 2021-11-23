package com.project.joseph;
import java.io.*;
import java.util.Scanner;

public class JospphProblem 
{
	static int jospphProblem(int n, int k)
	    {
	        if (n == 1)
	            return 1;
	        else
	           return (jospphProblem(n - 1, k) + k - 1) % n + 1;
	    }
	 
	    public static void main(String[] args)
	    {
	    	Scanner scan= new Scanner(System.in);
	    	System.out.println("Enter Total Number Of Person :-");
	        int n = scan.nextInt();
	        int k = 2;
	        System.out.println("The chosen place is "
	                           + jospphProblem(n, k));
	    }
	}

