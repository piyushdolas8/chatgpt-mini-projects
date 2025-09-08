#include <iostream>
#include <fstream>   // for file handling
#include <string>
using namespace std;

void writeFile(string filename) {
    ofstream out(filename.c_str());  // convert string to const char*

    if (!out) {
        cout << "Error: File cannot be opened!" << endl;
        return;
    }

    cout << "Enter text to write in file (type END to stop):" << endl;
    string line;
    while (true) {
        getline(cin, line);
        if (line == "END") break;
        out << line << endl;
    }
    out.close();
    cout << "Data written successfully!" << endl;
}

void readFile(string filename) {
    ifstream in(filename.c_str());  // convert string to const char*

    if (!in) {
        cout << "Error: File not found!" << endl;
        return;
    }

    cout << "\n--- File Content ---" << endl;
    string line;
    while (getline(in, line)) {
        cout << line << endl;
    }
    cout << "--------------------" << endl;
    in.close();
}

void appendFile(string filename) {
    fstream out(filename.c_str(), ios::app);  // convert string to const char*

    if (!out) {
        cout << "Error: File cannot be opened!" << endl;
        return;
    }

    cout << "Enter text to append in file (type END to stop):" << endl;
    string line;
    while (true) {
        getline(cin, line);
        if (line == "END") break;
        out << line << endl;
    }
    out.close();
    cout << "Data appended successfully!" << endl;
}

int main() {
    string filename;
    cout << "Enter file name: ";
    cin >> filename;
    cin.ignore(); // to avoid skipping input

    int choice;
    do {
        cout << "\n===== FILE MANAGEMENT TOOL =====" << endl;
        cout << "1. Write to File" << endl;
        cout << "2. Read from File" << endl;
        cout << "3. Append to File" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;
        cin.ignore(); // clear buffer

        switch (choice) {
            case 1: writeFile(filename); break;
            case 2: readFile(filename); break;
            case 3: appendFile(filename); break;
            case 4: cout << "Exiting program..." << endl; break;
            default: cout << "Invalid choice!" << endl;
        }
    } while (choice != 4);

    return 0;
}


