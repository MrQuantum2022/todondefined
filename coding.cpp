#include <iostream>
#include <algorithm>
#include <string>
#include <sstream>
#include <iomanip>
using namespace std;


class KeyGenerator {
public:
    // Method to find the key of three numbers
    string findKey(int num1, int num2, int num3) {
        // Step 1: Convert numbers to 4-digit strings with leading zeros if necessary
        string str_num1 = padWithZeros(num1);
        string str_num2 = padWithZeros(num2);
        string str_num3 = padWithZeros(num3);
        
        // Step 2: Initialize an empty string for the key
        string key = "";
        
        // Step 3: For each digit position, find the smallest digit
        for (int i = 0; i < 4; ++i) {
            char min_digit = min({str_num1[i], str_num2[i], str_num3[i]});
            key += min_digit;
        }
        
        // Step 4: Remove leading zeros and return the key as a string
        return removeLeadingZeros(key);
    }

private:
    // Helper method to pad numbers with leading zeros
    string padWithZeros(int num) {
        ostringstream oss;
        oss << setw(4) << setfill('0') << num;
        return oss.str();
    }
    
    // Helper method to remove leading zeros from the key
    string removeLeadingZeros(const string& key) {
        size_t pos = key.find_first_not_of('0');
        return pos == string::npos ? "0" : key.substr(pos);
    }
};

int main() {
    KeyGenerator keyGen;
    
    int num1 = 523;
    int num2 = 7645;
    int num3 = 9832;
    
    string key = keyGen.findKey(num1, num2, num3);
    cout << "Key: " << key << endl;  // Output: "5632"
    
    return 0;
}