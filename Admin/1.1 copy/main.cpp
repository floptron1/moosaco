#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
#include <queue>
#include <set>

#define int long long
#define def int n; cin >> n; int k; cin >> k;

using namespace std;

const int MAX = 1e18;
bool debugging = false;
int debugValue = -1;

void solve() {
    int q;
    cin >> q;
    vector<int> heap(0);
    for (int i = 0; i < q; i++) {
        int x;
        cin >> x;
        cout << "YES" << endl;
    }
}

int32_t main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    t = 1;
    for (int i = 1; i <= t; i++) {
        if (i == debugValue) {
            cout << i << " ";
            debugging = true;
        }
        solve();
        debugging = false;
    }
    return 0;
}
